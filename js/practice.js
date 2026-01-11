// practice.js - 代码练习库交互功能

document.addEventListener('DOMContentLoaded', function() {
    console.log('代码练习库脚本已加载');
    
    // 卡片悬停效果增强
    const languageCards = document.querySelectorAll('.language-card');
    languageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('.btn-view');
                if (link) {
                    link.style.background = '#2c974b';
                    setTimeout(() => {
                        window.location.href = link.href;
                    }, 300);
                }
            }
        });
    });
    
    // 平滑滚动到代码区域
    const codeSections = document.querySelectorAll('.code-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    codeSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
    // 复制代码功能
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.style.position = 'relative';
        
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.background = 'rgba(255,255,255,0.2)';
        copyButton.style.border = 'none';
        copyButton.style.padding = '5px 10px';
        copyButton.style.borderRadius = '3px';
        copyButton.style.cursor = 'pointer';
        copyButton.style.color = 'white';
        copyButton.style.fontSize = '12px';
        
        copyButton.addEventListener('click', function() {
            const codeText = block.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> 已复制';
                this.style.background = '#28a745';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.background = 'rgba(255,255,255,0.2)';
                }, 2000);
            });
        });
        
        block.parentNode.style.position = 'relative';
        block.parentNode.appendChild(copyButton);
    });
});