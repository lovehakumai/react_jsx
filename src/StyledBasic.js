export default function StyledBasic(){
    return(
        <>
            {/* StyleJSXによるスタイル定義 */}
            <style jsx>{`
                .pannel {
                    width : 300px;
                    padding : 10px;
                    border : 1px solid #000;
                    border-radius : 5px;
                    background-color: royalblue;
                    color: white;
                }
            `}</style>
            <div className="pannel">
                <b>Styled JSX</b> is put style definitions on the JSX sentence.
            </div>
        </>
    );
}