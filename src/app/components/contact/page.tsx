const Contact: React.FC<Fields> = ({fields, usedField}) => {
    
    return (
        <div className="text-2xl w-full mt-20">
            {fields[usedField] == "Contact" && (
                <div className="mx-24 mt-28 bg-black h-fit p-4 rounded-sm border border-black">
                  <p className="mb-12 text-6xl font-bold">Contact</p>
                </div>
              )}
        </div>
    )
};

export default Contact;