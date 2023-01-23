import { useState } from 'react';
import { Nav_Buttons } from '@data/index';
import Divider from '@ui/Divider';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SideLinks() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { asPath } = useRouter();

  return (
    <>
      <div className="flex w-max flex-col items-center justify-center gap-3">
        {Nav_Buttons.map((el, i) => (
          <div key={el.index}>
            {el.index === 3 && <Divider className="mb-3" />}
            <Link href={el.href}>
              <div
                className={`rounded-md p-2 dark:text-white ${
                  el.href === asPath && 'bg-main-accent'
                }`}
                onClick={() => setSelectedTab(i)}
              >
                <div
                  className={`h-max w-max ${
                    el.index === selectedTab && 'text-white'
                  }`}
                >
                  {el.icon}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
