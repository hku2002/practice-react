'use client'
import React, {useRef, useState} from 'react';
import CustomModal from "@/common/ui/custom.modal";

const RegistrationForm = () => {
    // 년도와 월을 위한 데이터 생성
    const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [focusTarget, setFocusTarget] = useState('');

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const emailRef = useRef(null);
    const password1Ref = useRef(null);
    const phoneNumberRef = useRef(null);

    const closeModal = () => {
        setIsModalOpen(false);
        if (focusTarget === 'email') {
            emailRef.current.focus();
        } else if (focusTarget === 'password1') {
            password1Ref.current.focus();
        } else if (focusTarget === 'phoneNumber') {
            phoneNumberRef.current.focus();
        }

        setFocusTarget('');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword1Change = (event) => {
        setPassword1(event.target.value);
    };
    const handlePassword2Change = (event) => {
        setPassword2(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        const { value } = event.target;
        const onlyNumbers = value.replace(/[^\d]/g, '');

        if (onlyNumbers.length <= 3) {
            setPhoneNumber(onlyNumbers);
        } else if (onlyNumbers.length <= 7) {
            setPhoneNumber(`${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`);
        } else {
            setPhoneNumber(`${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.trim()) {
            setModalContent('이메일을 입력해주세요.');
            setIsModalOpen(true);
            setFocusTarget('email');
            return;
        }

        if (!password1.trim()) {
            setModalContent('비밀번호를 입력해주세요.');
            setIsModalOpen(true);
            setFocusTarget('password1');
            return;
        }

        if (password1.trim() !== password2.trim()) {
            setModalContent('비밀번호가 일치하지 않아요.');
            setIsModalOpen(true);
            setFocusTarget('password1');
            return;
        }

        if (!phoneNumber.trim()) {
            setModalContent('휴대전화 번호를 입력해주세요.');
            setIsModalOpen(true);
            setFocusTarget('phoneNumber');
            return;
        }

        if (phoneNumber.length != 13) {
            setModalContent('000-0000-0000 형식에 맞춰주세요.');
            setIsModalOpen(true);
            setFocusTarget('phoneNumber');
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
                    ref={emailRef}
                />

                <label style={styles.label}>비밀번호</label>
                <input
                    type="password"
                    placeholder="비밀번호"
                    style={styles.input}
                    value={password1}
                    onChange={handlePassword1Change}
                    ref={password1Ref}
                />

                <label style={styles.label}>비밀번호 확인</label>
                <input type="password"
                       placeholder="비밀번호 확인"
                       style={styles.input}
                       value={password2}
                       onChange={handlePassword2Change}
                />

                <label style={styles.label}>전화번호</label>
                <input
                    type="tel"
                    placeholder="000-0000-0000"
                    style={styles.input}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    ref={phoneNumberRef}
                />

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
                        <input type="radio" name="pet" value="dog" style={styles.radio} checked={true} />
                        강아지
                    </label>
                    <label style={styles.radioLabel}>
                        <input type="radio" name="pet" value="cat" style={styles.radio} />
                        고양이
                    </label>
                </div>

                <button type="submit" style={styles.button}>회원가입</button>
            </form>
            <CustomModal show={isModalOpen} onClose={closeModal}>
                <p>{modalContent}</p>
            </CustomModal>
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
