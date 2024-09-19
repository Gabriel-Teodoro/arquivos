const TemplateExpressions = () => {

    const name = "Gabriel";
    const data = {
        age: 29,
        job: "Programmer",
      };
    return (
        <div>
            <h1>Olé {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    );
};

export default TemplateExpressions;