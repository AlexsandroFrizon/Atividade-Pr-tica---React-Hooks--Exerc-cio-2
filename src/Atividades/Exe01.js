const [tech, setTech] = useState([]);

const exercicio1 = [ 'ReactJS', 'ReactNative', 'NodeJS'];

const listItems = exercicio1.map((exercicio1) =>
    <li>{exercicio1}</li>
);
