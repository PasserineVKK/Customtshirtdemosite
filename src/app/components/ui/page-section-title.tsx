export const SectionTitle = ({title, subTitle} : {title: string, subTitle: string}) =>{ 
    return (<div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"> {title}</h2>
            <p className="text-gray-600">
              {subTitle}
            </p>
          </div>
    )
}