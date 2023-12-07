import EyeIcon from './eye';

export default function PasswordIcon({ type, ...props }) {

    return (type === 'password' ? <EyeIcon {...props} /> : <EyeIcon {...props} />
    );
}
