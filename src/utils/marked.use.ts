import { marked } from "marked"

export const markedUseLink = (marked: any) => {
  marked.use({
    renderer: {
      link(href: string, title: string, text: string) {
        return `<a href="${href}" title="${title}" target="_blank" rel="noopener noreferrer">${text}</a>`
      }
    }
  })
}