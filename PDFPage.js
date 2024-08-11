class PDFPage {
    constructor(pageNumber) {
      this.contents = [];
      this.pageNumber = pageNumber;
    }
  
    addText(text, x, y, fontSize = 12) {
      this.contents.push(`BT /F1 ${fontSize} Tf ${x} ${y} Td (${text}) Tj ET`);
    }
  
    render() {
      return this.contents.join("\n");
    }
  }
  
  module.exports = PDFPage;
  