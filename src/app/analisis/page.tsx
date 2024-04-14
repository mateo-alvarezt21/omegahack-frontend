import { LineChart } from "../components/line-chart";
import { data } from "../data";

data

export default function Page() {
    return (
        <>
            <div className="mx-auto max-w-7xl pb-5 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Análisis</h1>
            </div>
            {data.map((item) => (
                <>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center py-5" >{item.name}</h1>
                <LineChart dataCharts={item.data} />
                </>
            ))}
            
        </>
    )
}