import React from "react";
import Table from "./Table";
import ReactToPrint from "react-to-print";

class PrintableTable extends React.Component {
  render() {
    const pageStyle = `
      @page {
        margin: 1cm;
      }

      @media print {
        body {
          margin: 0;
          padding: 0;
          font-size: 16pt;
        }
        table {
            font-size: 14pt;
          }
      }
    `;
    return (
      <div>
        <Table ref={(el) => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <button>Print Table</button>}
          content={() => this.componentRef}
          pageStyle={pageStyle}
        />
      </div>
    );
  }
}

export default PrintableTable;
