import {t} from 'app/locale';
import {CommitAuthor, User} from 'app/types';

export function userDisplayName(user: User | CommitAuthor): string {
  let displayName = String(user?.name ?? t('Unknown author')).trim();

  if (displayName.length <= 0) {
    displayName = t('Unknown author');
  }

  const email = String(user?.email ?? '').trim();

  if (email.length > 0 && email !== displayName) {
    displayName += ' (' + email + ')';
  }
  return displayName;
}
