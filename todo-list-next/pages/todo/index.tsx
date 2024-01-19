// pages/index.js
import TodoList from '../../components/todo/TodoList';
import Head from 'next/head';

const Home = ({ initialData }) => {
    return (
        <>
            <Head>
                <title>Todo List</title>
            </Head>
            <TodoList initialData={initialData} />
        </>
    );
};

export async function getServerSideProps() {
    const apiUrl = 'http://localhost:8080/todos';
    try {
        const response = await fetch(apiUrl);
        const initialData = await response.json();
        const isServer = true;

        return {
            props: {
                initialData,
                isServer,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                initialData: [],
            },
        };
    }
}

export default Home;
