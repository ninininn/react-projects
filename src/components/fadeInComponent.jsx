import { motion } from "motion/react";

const FadeInComponent = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // 初始透明度為 0，垂直偏移 50px
            animate={{ opacity: 1, y: 0 }} // 動畫目標：完全可見且回到原位
            transition={{ duration: 0.8, ease: "easeOut" }} // 動畫持續 0.8 秒，使用緩出效果
        >
            {children}
        </motion.div>
    );
};

export default FadeInComponent;
