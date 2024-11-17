import css,{globalCss, resolveCss} from './StyleCss.css';

export default function StyledCss(){
    return (
        <>
            {/* 外部スタイルをインポートする */}
            <style jsx>{css}</style>
            <style jsx>{globalCss}</style>
            <h3>Global Css's Design is this</h3>
            <div className='pannel'><b>Styled JSX</b>はJSX式にスタイル定義を適用する</div>
            <hr />
            <h3>埋め込み型の外部スタイルで以下を反映</h3>
            <div className={`pannel ${resolveCss.className}`}><b>Styled JSX</b> put styles on JSX</div>
        </>
    );
}