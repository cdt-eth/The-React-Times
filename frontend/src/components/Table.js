import React from "react";
import uuid from "react-uuid";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "Article 1",
          keywords:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia vel nunc a convallis. Cras arcu odio, consequat et est sit amet, pellentesque cursus erat. Sed blandit feugiat rhoncus. Ut sollicitudin lorem id sem pellentesque interdum.",
        },
        {
          title: "Article 2",
          keywords:
            "Pellentesque congue, lacus ac egestas fermentum, leo mauris porta arcu, vel fringilla mi mauris sit amet lectus. Aliquam erat volutpat. Nulla a risus id libero tempus porta ac ut erat. Vivamus laoreet massa elit, ac tincidunt magna porttitor non.",
        },
        {
          title: "Article 3",
          keywords:
            "Praesent scelerisque metus id rhoncus fringilla. Nam sed purus ac nisi cursus blandit ut quis urna. Fusce ut mollis purus, eu interdum leo. Nunc in nibh felis.",
        },
      ],
    };
  }

  renderTableData() {
    return this.state.articles.map((article, index) => {
      const { title, keywords } = article;
      return (
        <tr key={uuid}>
          <td>{title}</td>
          <td>{keywords}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <th>{this.props.col1}</th>
          <th>{this.props.col2}</th>
        </thead>
        <tbody>{this.renderTableData()}</tbody>
      </table>
    );
  }
}
