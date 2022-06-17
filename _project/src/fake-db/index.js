import mock from './mock';
import './db/profile-db';
import './db/auth-db';

mock.onAny().passThrough();
