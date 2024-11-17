// style jsxを外部ファイルで管理するにはcss関数を用いる
// css `文字列リテラル`の書き方を「タグ付きテンプレートリテラル」という。
import css from "styled-jsx/css";

export default css`
.pannel {
    width : 300px;
    padding : 10px;
    border : 1px solid #000;
    border-radius : 5px;
    background-color: royalblue;
    color: white;
}`;

// グローバルスタイル
export const globalCss = css.global`
    h3 {
        background-color : Yellow;
    }`;

// 埋め込み式のスタイル
export const resolveCss = css.resolve`
    .pannel {
        margin: 50px;
        background-color: pink;
    }`;