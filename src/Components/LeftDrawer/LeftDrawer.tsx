import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LeftDrawerType, useAppStore } from "../../appStore";
import { ReactComponent as CloseDrawerIcon } from '../../Assets/Basic/close_drawer_icon.svg';
import { ReactComponent as ChevronDown } from '../../Assets/Basic/chevron_down_icon.svg';
import './leftDrawer.scss';

const slideDrawer = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "linear", staggerChildren: 0.005, duration: 0.02 }
  },
  closed: {
    opacity: 0,
    x: "-22vw",
    transition: { type: "linear" }
  }
};

const itemRow = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.3 }
  },
  closed: {
    opacity: 0,
    x: "-22vw",
  }
};

function LeftDrawer<Type>(
  props: {
    drawerType: LeftDrawerType,
    drawerTitle: string,
    itemList: Type[],
    handleItemClick: (item: Type) => void,
    content: (props: { item: Type }) => JSX.Element
  }) {
  const toggleLeftDrawer = useAppStore(state => state.toggleLeftDrawer);
  const closeLeftDrawer = () => toggleLeftDrawer(props.drawerType);

  return (
    <>
      <motion.div
        variants={slideDrawer}
        initial="closed"
        animate="open"
        exit="closed"
        className='ldrawer-background'
      ></motion.div>

      <div className='ldrawer-container'>
        <motion.div
          variants={slideDrawer}
          initial="closed"
          animate="open"
          exit="closed"
          className="ldrawer-title"
        >
          {props.drawerTitle}
          <CloseDrawerIcon className='close-drawer-icon' onClick={closeLeftDrawer} />
        </motion.div>
        <ItemList list={props.itemList} handleItemClick={props.handleItemClick}>{props.content}</ItemList>
      </div>
    </>
  );
}

function ItemList<Type>(
  props: {
    list: Type[],
    handleItemClick: (item: Type) => void,
    children: (props: { item: Type }) => JSX.Element
  }) {
  const [listClass, setListClass] = useState('');
  const itemListRef = useRef<HTMLUListElement>(null);

  const handleScroll = (e: any) => {
    const hideEnd = e.target.scrollTop + e.target.offsetHeight > e.target.scrollHeight - 10;
    if (hideEnd) {
      setListClass(() => '');
    } else {
      setListClass(() => 'list-end-hidden');
    }
  };

  const scrollToBottom = () => itemListRef.current?.scrollBy({ top: 300, behavior: 'smooth' });

  useEffect(() => {
    if (itemListRef.current &&
      (itemListRef.current.clientHeight !== itemListRef.current.scrollHeight)) {
      setListClass('list-end-hidden');
    }
  }, [itemListRef]);

  return (
    <>
      <motion.ul
        variants={slideDrawer}
        initial="closed"
        animate="open"
        exit="closed"
        ref={itemListRef}
        onScroll={e => handleScroll(e)}
        className={'ld-ul ' + listClass}
      >
        {props.list.map(item =>
          <motion.li
            key={(item as any).id}
            variants={itemRow}
            whileTap={{ scale: 0.98, transition: { duration: 0.01 } }}
            onClick={() => props.handleItemClick(item)}
            className={'ld-li'}
          >
            {props.children({ item })}
          </motion.li>
        )}
      </motion.ul>
      {listClass &&
        <motion.div
          variants={slideDrawer}
          initial="closed"
          animate="open"
          exit="closed"
          whileTap={{ scale: 0.98, transition: { duration: 0.01 } }}
        >
          <ChevronDown className='list-end-icon' onClick={scrollToBottom} />
        </motion.div>
      }
    </>
  );
}

export default LeftDrawer;