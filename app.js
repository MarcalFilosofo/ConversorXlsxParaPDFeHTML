var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');
var Writer = require('./Writer');
var PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read('./faturamento.csv')
    var dadosProcessados = Processor.process(dados)

    var faturamento = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(faturamento)

    PDFWriter.WritePDF('novoPdf.pdf', html)
    escritor.Write('novoHtml.html', html)
}

main()