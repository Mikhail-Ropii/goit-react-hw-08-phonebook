import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <p>
      The page is not found. Please return on <Link to={'/'}>main page</Link>.
    </p>
  );
}
