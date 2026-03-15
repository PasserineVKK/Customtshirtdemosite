import * as React from "react";
import { Truck } from 'lucide-react'

interface SimpleFeatureCard {
    icon: any,
    title: String,
    description: String
}

//  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Truck className="w-8 h-8 text-orange-600" />
//               </div>
//               <h3 className="font-semibold text-lg mb-2">Giao hàng nhanh</h3>
//               <p className="text-gray-600 text-sm">
//                 Miễn phí ship đơn từ 500k, giao hàng 2-3 ngày
//               </p>

export const SimpleFeatureCard = ({icon, title, description} : SimpleFeatureCard) => {
    let Icon = icon;
   return (<>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">
                {description}
            </p> </> )
}