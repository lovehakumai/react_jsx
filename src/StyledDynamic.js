export default function StyledDynamic({theme}){
    return(
        <>
            <style jsx>{`
                .pannel {
                    width: 300px;
                    padding: 10px;
                    border: 1px solid #000;
                    color: white;
                }
            `}</style>
            <style jsx>{`
                // Propsから動的に設定値を生成
                .pannel {
                    border-radius: ${theme.radius ? '10px' : '0px'};
                    background-color: ${theme.color};
                }`}
            </style>
            <div className="pannel"><b>Styled JSX</b> can put style dinamically</div>
        </>
    );
}