const Ecommerce: React.FC<Fields> = ({fields, usedField}) => {
    
    return (
        <div className="text-2xl w-full mt-20">
            {fields[usedField] == "E-commerce" && (
                <div className="mx-24 mt-28 bg-black p-4 rounded-sm border border-black overflow-auto h-screen pb-40">
                    <div className="flex items-start">
                        <p className="mb-12 text-6xl font-bold">E-commerce</p>
                        <a href="https://github.com/FLIzze/Project-symfony" target="blank">
                            <img src="github-logo.png" alt="github" className="h-16 w-16 ml-7"/>
                        </a>
                    </div>
                    <div className="text-justify">
                        <p className="mb-3">Site de e-commerce de vente de fleurs, realise en Symfony avec une bdd en mySQL.</p>
                        <img src="github-logo.png" alt="" />

                    </div>
                </div>
              )}
        </div>
    )
};

export default Ecommerce;