import {noticeboardString, listItemString} from "./templates/post-noticeboard.ts"
import {replace, stringToDOM, ReplacePair} from "../../utilities/templateUtils.ts";

export default class PostNoticeboard {

    static createDOM(headerContent:string, textContentArray:string[]):HTMLDivElement {
        const listArray:string[] = [...Array(textContentArray.length).fill(listItemString)]
        const headerString = replace(noticeboardString, [{pattern: 'header', replacement: headerContent}])
        const noticeboardEl = stringToDOM(headerString) as HTMLDivElement
        const orderedListEl = noticeboardEl.querySelector('ol') as HTMLOListElement

        textContentArray.forEach((textContent, index) => {
            const replacePair:ReplacePair[] = [{pattern: 'textContent', replacement: textContent}]
            const replacedString:string = replace(listArray[index], replacePair)
            const listItemEl = stringToDOM(replacedString) as HTMLLIElement
            
            orderedListEl.append(listItemEl);
        })
        
        return noticeboardEl;
    }
}