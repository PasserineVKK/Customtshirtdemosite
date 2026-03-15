{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="font-semibold text-xl mb-3">Chọn hoặc thiết kế</h3>
              <p className="text-gray-600">
                Chọn từ bộ sưu tập có sẵn hoặc tự thiết kế áo riêng với công cụ custom
              </p>
            </div> */}

export const GuidePoint = ({stepNum, stepTitle, stepDescription} : {stepNum: number, stepTitle: String, stepDescription: String}) => {
    return (
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                {stepNum}
              </div>
              <h3 className="font-semibold text-xl mb-3">{stepTitle}</h3>
              <p className="text-gray-600">
                {stepDescription}
              </p>
            </div>
    )
}