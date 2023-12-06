import { useSendMobileVerificationCodeMutation } from '@/store/service/accounts';

export default function useSendMobileCodeApi() {
    const [sendMobileVerificationCode, response] = useSendMobileVerificationCodeMutation();
    const sendMobileCode = sendMobileVerificationCode;

    return [sendMobileCode, response];
}
