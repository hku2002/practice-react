import React from 'react';
import Link from "next/link";

const LoginForm = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>로그인</h2>
            <form style={styles.form}>
                <input type="email" placeholder="이메일" style={styles.input} />
                <input type="password" placeholder="비밀번호" style={styles.input} />
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>로그인</button>
                    <Link href="/registeration" passHref>
                        <button type="button" style={styles.button}>회원가입</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        width: '400px',
        margin: 'auto',
        marginTop: '100px',
    },
    header: {
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '100%',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#007bff',
    },
};

export default LoginForm;
