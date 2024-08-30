import clsx from 'clsx';
import { Kbd } from '@/components/ui/kdb';
import useGlobal from '@/hooks/useGloal';
import { MessageCircleQuestionIcon } from 'lucide-react';

export const NavIconQuickAccess = () => {
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal();


  return (
    <button
      type="button"
      className={clsx(
        'ml-1 flex h-9 w-9 items-center justify-center gap-2 rounded-xl bg-slate-300/50 text-slate-800',
        'xl:w-auto xl:px-3',
        'hover:bg-slate-300/70 sm:ml-0',
        'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
      )}
      aria-label="Open Quick Access"
      title="Open Quick Access"
      onClick={() => {
        setQuickAccessOpen(true);
      }}
    >
      <MessageCircleQuestionIcon className={clsx('h-5 w-5')} />
      <div
        className={clsx(
          'hidden items-center gap-2 text-xs font-bold',
          'xl:flex',
          'dark:font-normal'
        )}
      >
        Quick Access
        <Kbd>Q</Kbd>
      </div>
    </button>
  );
}
