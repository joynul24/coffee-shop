
const CoffeeGalary = () => {
    return (
        <div className="mt-20 container mx-auto">
           <div className="text-center space-y-3">
           <p className="font-raleway text-xl">Follow Us Now</p>
           <h3 className='text-5xl'>Follow on Instagram</h3>
           </div>
           {/* all coffee images */}
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {/* img -1 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2016.png" alt="" /></div>
            {/* img -2 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2015.png" alt="" /></div>
            {/* img -3 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2014.png" alt="" /></div>
            {/* img -4 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2013.png" alt="" /></div>
            {/* img -5 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2012.png" alt="" /></div>
            {/* img -6 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2011.png" alt="" /></div>
            {/* img -7 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%2010.png" alt="" /></div>
            {/* img -8 */}
             <div><img className="w-full" src="https://joynul2024.sirv.com/coffee-images/cups/Rectangle%209.png" alt="" /></div>
           </div>
        </div>
    );
};

export default CoffeeGalary;