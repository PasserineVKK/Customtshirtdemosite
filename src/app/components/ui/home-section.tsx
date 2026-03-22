interface Props {
    backgroundColor?: string,
    py: number,
    className?:string,
    children: any
}

export const HomeSection = (props:Props) => {
    
    return (<>
        <section className={`py-${props.py} ${props.backgroundColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {props.children}
        </div>
      </section>
      </>)

}