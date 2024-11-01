import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        {id: 1, name: "Alice", math: 78, physics: 85, chemistry: 82},
        {id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88},
        {id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 90},
        {id: 4, name: "David", math: 74, physics: 76, chemistry: 72},
        {id: 5, name: "Eve", math: 88, physics: 82, chemistry: 84},
        {id: 6, name: "Frank", math: 90, physics: 89, chemistry: 91},
        {id: 7, name: "Grace", math: 76, physics: 73, chemistry: 77},
        {id: 8, name: "Hannah", math: 83, physics: 86, chemistry: 80},
        {id: 9, name: "Ian", math: 95, physics: 94, chemistry: 92},
        {id: 10, name: "Jane", math: 80, physics: 78, chemistry: 85}
    ];
    
    


    return (
        <div>
            <LChart width={900} height={500} data={studentMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                    <Line  dataKey="math" stroke='red'></Line>
                    <Line dataKey="physics" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;