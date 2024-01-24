'use client'
import React, {useState} from 'react';

const RegistrationForm = () => {
    // 년도와 월을 위한 데이터 생성
    const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.trim()) {
            alert('이메일을 입력해주세요.');
            return;
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>이메일</label>
                <input
                    type="email"
                    placeholder="이메일"
                    style={styles.input}
                    value={email}
                    onChange={handleEmailChange}
                />

                <label style={styles.label}>비밀번호</label>
                <input type="password" placeholder="비밀번호" style={styles.input} />

                <label style={styles.label}>비밀번호 확인</label>
                <input type="password" placeholder="비밀번호 확인" style={styles.input} />

                <label style={styles.label}>전화번호</label>
                <input type="tel" placeholder="전화번호" style={styles.input} />

                <div style={styles.selectGroup}>
                    <label style={styles.label}>년도/월</label>
                    <div style={styles.selectContainer}>
                        <select style={styles.select}>
                            {years.map(year => <option key={year} value={year}>{year}</option>)}
                        </select>
                        <select style={styles.select}>
                            {months.map(month => <option key={month} value={month}>{month}</option>)}
                        </select>
                    </div>
                </div>

                <div style={styles.radioContainer}>
                    <label style={styles.radioLabel}>
                        <input type="radio" name="pet" value="dog" style={styles.radio} />
                        강아지
                    </label>
                    <label style={styles.radioLabel}>
                        <input type="radio" name="pet" value="cat" style={styles.radio} />
                        고양이
                    </label>
                </div>

                <button type="submit" style={styles.button}>회원가입</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        width: '400px',
        margin: 'auto',
        marginTop: '100px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    label: {
        marginBottom: '5px',
        fontSize: '13px',
    },
    input: {
        marginBottom: '20px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    selectGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
    },

    selectContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    select: {
        width: '48%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    radioContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    radioLabel: {
        margin: '0 10px',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    radio: {
        margin: '0 5px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#007bff',
    }
};

export default RegistrationForm;
