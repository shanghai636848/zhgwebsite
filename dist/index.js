document.addEventListener('DOMContentLoaded', function () {


    
    //移动端
    const mobileMenuButton = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-menu');

    // 主产品展示
    const mainProductDataArray = [
        {
            id: 1,
            image: "./img/3500-1.jpg",
            title: "无主栅电极互连一体机(WV-3500C)",
            description: "无主栅电极互连一体机（综合性焊接平台，可覆盖HJT/TOPcon/PERC/钙钛矿叠层, 首创 OBB 条膜工艺）",
            features: [
                {
                    title: "高性能",
                    content: "采用PC-Base控制系统，可重构I/O接口与定制化系统集成，智能化控制中枢构建高性能自动化平台"
                },
                {
                    title: "高精密",
                    content: "亚微米级重复定位精度(±0.5μm)，高分辨率直线电机驱动单元，温度漂移实时补偿模块高精度伺服控制架构"
                },
                {
                    title: "电池兼容",
                    content: "兼容182-210规格HJT/TOPcon/PERC/钙钛矿叠层"
                }
            ],
            buttonText: "了解更多产品细节",
            buttonIcon: "fa-arrow-right",
            badgeText: "核心产品"
        }
    ];
    // 生成主产品展示内容
    function generateMainProduct() {
        // 确保数据存在
        if (!mainProductDataArray.length) return '';

        const mainProductData = mainProductDataArray[0]; // 假设只展示第一个产品

        // 产品图片部分（变量名移除 product 字样）
        const imageHTML = `
            <div class="lg:w-1/2 relative">
                <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="${mainProductData.image}" alt="${mainProductData.title}" class="w-full h-auto">
                    ${mainProductData.badgeText ? `
                        <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                            ${mainProductData.badgeText}
                        </div>
                    ` : ''}
                </div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                <div class="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
        `;

        // 产品描述部分（变量名移除 product 字样）
        const featureListHTML = mainProductData.features.map(feature => `
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fa fa-check text-primary"></i>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-dark mb-1">${feature.title}</h4>
                    <p class="text-gray-600">${feature.content}</p>
                </div>
            </div>
        `).join('');

        const descHTML = `
            <div class="lg:w-1/2">
                <h3 class="text-2xl md:text-3xl font-bold text-dark mb-6">${mainProductData.title}</h3>
                <p class="text-gray-700 mb-6 text-lg">${mainProductData.description}</p>
                
                <div class="space-y-4 mb-8">
                    ${featureListHTML}
                </div>
                
                <a href="#products" id="mainProductBtn" class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-custom">
                    ${mainProductData.buttonText}
                    <i class="fa ${mainProductData.buttonIcon} ml-2"></i>
                </a>
            </div>
        `;

        // 组合完整内容
        return `
            <div class="flex flex-col lg:flex-row items-center gap-12" id="mainProductContainer">
                ${imageHTML}
                ${descHTML}
            </div>
        `;
    }
    // 生成主产品内容
    const mainProductHTML = generateMainProduct();
    // 插入到主产品展示 section 中
    const mainProductSection = document.getElementById('main-products');
    if (mainProductSection) {
        const contentContainer = mainProductSection.querySelector('#main-product-container');
        if (contentContainer) {
            contentContainer.innerHTML = mainProductHTML;
        }
    }

    // 产品目录
    const productContentContainer = document.getElementById('product-content-container');
    const products = {
        'WV-3500C': {
            name: '无主栅电极互连一体机(WV-3500C)',
            images: ['./img/3500-1.jpg', './img/3500-2.jpg', './img/3500-3.jpg'],
            technicalPerformance: [
                '高性能：采用PC-Base控制系统，可重构I/O接口与定制化系统集成，智能化控制中枢构建高性能自动化平台',
                '高精密：亚微米级重复定位精度(±0.5μm)，高分辨率直线电机驱动单元，温度漂移实时补偿模块高精度伺服控制架构',
                '电池兼容：兼容182-210规格HJT/TOPcon/PERC/钙钛矿叠层'
            ],
            productParameters: {
                '产能': '4500半片/小时 (单轨)',
                '划片方式': '激光无损切割(可选配)',
                '连接方式': '条膜/片膜覆膜',
                '电池片规格': '182-210mm电池片1/2片',
                '主栅线数量': '12-32BB (可定制)',
                '电池片厚度': '90-180μm',
                '焊带规格': 'φ0.16-φ0.32mm',
                '电池串兼容类型': '正间距(0.5-5mm) 负间距(-0.5-2mm)',
                '设备尺寸': '长8150x宽1294x高2537(mm)',
                '可兼容胶膜规格': '膜材质:改性带EVA/POE/TPO(或同等低流动性材质膜);同时可兼容带背胶的Pet; 卷外直径:450mm(可在线自动换料); 卷轴内径:76 mm; 膜条宽度:2.8-6mm; 正背面膜:正面和背面可使用不同膜',
                '碎片率': '≤0.15% (电池片厚度120-140um)',
                '串返修率': '≤1%',
                'OEE': '≥85%',
                '助焊剂': '无',
                '焊接温度': '低温'
            }
        },
        'WV-TM100A': {
            name: '无主栅电极互连一体机(WV-TM100A)',
            images: ['./img/TM100A-1.jpg', './img/TM100A-2.jpg', './img/TM100A-3.jpg'],
            technicalPerformance: [
                '高速度：高度定制化系统集成、基于PC-Base控制系统，响应速度快',
                '智慧互连：智能数据分类、AI数据分析',
                '电池兼容：兼容182-210规格HJT/TOPcon/PERC/钙钛矿叠层',
                '集成多重工艺，检测、数据追踪系统、实现生产、检测、判断于一体，以保证生产制造过程中产品良率'
            ],
            productParameters: {
                '产能': '7000四分片/小时(单轨) (兼容2分片)',
                '划片方式': '激光无损切割 (可选配)',
                '连接方式': '条膜/片膜覆膜',
                '电池片规格': '182-210mm',
                '主栅线数量': '12-32BB (可定制)',
                '电池片厚度': '90-180μm',
                '焊带规格': 'φ0.16-φ0.32mm',
                '电池串兼容类型': '正间距(0.5-5mm) 负间距(-0.5-2mm)',
                '设备尺寸': '长10400×宽2100×高2500(mm)',
                '可兼容胶膜规格': '膜材质:改性带EVA/POE/TPO(或同等低流动性材质膜);同时可兼容带背胶的Pet; 卷外直径:450mm(可在线自动换料); 卷轴内径:76 mm; 膜条宽度:2.8-6mm; 正背面膜:正面和背面可使用不同膜',
                '碎片率': '≤0.15% (电池片厚度120-140um)',
                '串返修率': '≤1%',
                'OEE': '≥85%',
                '助焊剂': '无',
                '焊接温度': '低温'
            }
        },
        'WV-AZ400': {
            name: '接线盒安装一体机(WV-AZ400)',
            images: ['./img/WV-AZ400.jpg'],
            technicalPerformance: [
                '设备稳定性强,背板打胶独立PLC控制,流线传输独立控制,一键切换直通模式',
                '自主研发视觉控制系统,精准实现线盒定位并判定线盒安装效果',
                '多功能视觉检测,包含汇流条姿态,四氟布、胶带状态,胶路检测,线盒安装条件判定以及线盒安装、按压效果检测',
                '无序上料,可对接AGV、空中穿梭机,实现无人智能化'
            ],
            productParameters: {
                '节拍': '≤12S',
                '引线挑起成功率': '≥99.9%(去除来料不良)',
                '胶带、胶布撕取成功率': '≥99.8%(去除来料不良)',
                '背板打胶成功率': '≥99.9%',
                '线盒安装成功率': '≥99.8%(去除来料不良)',
                '稼动率': '≥99.5%',
                '上料方式': '有序/无序,AGV对接',
                '组件尺寸范围': 'L:2500-1650mm,W:1450-990mm',
                '设备电源、功率': '380V/220V 50/60HZ',
                '组件输入、输出高度': '950±50(mm)'
            }
        },
        'WV-AJ100': {
            name: '引线挑起背板打胶一体机(WV-AJ100)',
            images: ['./img/WV-AJ100.jpg'],
            technicalPerformance: [
                '自主研发视觉系统,精准检测来料状态、引导定位、成品检查',
                '兼具自动挑引线、捋直,高温布撕除、烫平、回收功能',
                '多处盒体引线采用同步操作,高节拍,高速度,高效率'
            ],
            productParameters: {
                '节拍': '≤12S',
                '引线挑起成功率': '≥99.9%(去除来料不良)',
                '胶带、胶布撕取成功率': '≥99.8%(去除来料不良)',
                '背板打胶良率': '≥99.9%',
                '稼动率': '≥99.5%',
                '组件尺寸范围': 'L:2500-1650mm,W:1450-990mm'
            }
        },
        'WV-AZ500A': {
            name: '背板打胶及线盒安装一体机(WV-AZ500A)',
            images: ['./img/WV-AZ500A.jpg'],
            technicalPerformance: [
                '具备汇流条检测、胶线检测、线盒检测功能,自动识别不良品与报警',
                '自研深度学习视觉系统,实现线盒精准定位及安装',
                '兼容有序/无序线盒上料方式,配合度高,节拍快,可对接AGV、空中穿梭机,实现无人智能化'
            ],
            productParameters: {
                '节拍': '≤12S',
                '背板打胶良率': '≥99.9%',
                '线盒安装成功率': '≥99.8%(去除来料不良)',
                '稼动率': '≥99.5%',
                '上料方式': '有序/无序,AGV对接',
                '组件尺寸范围': 'L:2500-1650mm,W:1450-990mm'
            }
        },
        'WV-XH13A': {
            name: '接线盒激光焊接机(WV-XH13A)',
            images: ['./img/WV-XH13A.jpg'],
            technicalPerformance: [
                '采用全新激光焊接工艺,开创激光技术应用于接线盒焊接领域',
                '激光熔融焊,实现无锡焊接,焊接强度更高',
                '具备CCD焊前高精度自动定位,精准实现焊接',
                '具备高精度焊中、焊后检测功能,可精准识别虚焊',
                '焊接压块具备汇流条折弯校平功能,兼容性更好',
                '设备整体布局合理,便于调试和维护操作'
            ],
            productParameters: {
                '设备占地': '3145mm×2200mm×2160mm',
                '兼容组件大小': '长(1600mm-2550mm)×宽(990-1450mm)',
                '节拍': '≤12S',
                '焊接良率': '≥99.9%(去除来料不良)',
                '稼动率': '≥99.5%',
                '过判率': '≤0.5%',
                '焊接拉力': '≥100N',
                '额定功率': '10kw',
                '归正精度': '±0.5mm',
                '电源': 'AC 380V±5%,50Hz',
                '气源': '0.5-0.8MPa'
            }
        },
        'WV-XH06A': {
            name: '接线盒高频焊接机(WV-XH06A)',
            images: ['./img/WV-XH06A.jpg'],
            technicalPerformance: [
                '采用视觉定位、全伺服驱动控制',
                '具备高产能、高兼容性、高稳定性',
                '具备压力检测、位移检测',
                '全自动焊头清洁',
                '分体焊头,一体焊头等多种焊头规格可供选择',
                '具备漏水检测功能'
            ],
            productParameters: {
                '设备尺寸': '3600×2000×2220(mm)可定制',
                '设备电源': '三相五线 380V,50Hz, 峰值电流 40A',
                '功率': '额定功率 24KW',
                '组件尺寸范围': 'L:2550-1500mm,W:1450-900mm',
                '节拍': '≤12S',
                '组件、接线盒定位方式': '组件伺服驱动四点归正,接线盒CCD定位',
                '焊头寿命': '≥15W',
                '稼动率': '≥99.5%',
                '焊接时间': '≤3S/点',
                '焊点定位控制方式': 'CCD',
                '版型切换时间': '20min',
                '焊接温度范围': '±15℃',
                '焊接后拉拔力': '≥50N'
            }
        },
        'WV-XH09A': {
            name: '接线盒热压焊接机(WV-XH09A)',
            images: ['./img/WV-XH09A.jpg'],
            technicalPerformance: [
                '采用高效焊接系统与动态视觉跟踪设计，提高机台稳定性',
                '控温精准：各焊接点位独立控制、各加热主体互不影响，保证控温准确性'
            ],
            productParameters: {
                '占地尺寸': '长3850x宽2100x高2150mm(不含三色灯)',
                '组件尺寸范围': 'L:2550-1500mm,W:1450-950mm',
                '设备电源': '三相五线380V,50Hz,稳定电流60A',
                '功率': '额定功率27KW',
                '焊点定位控制方式': 'CCD',
                '组件、接线盒定位方式': '组件伺服/气缸驱动四点归正，接线盒CCD定位',
                '焊头寿命': '≥3.5W',
                '版型切换时间': '20min',
                '焊接温度范围': '±5℃',
                '焊接后拉拔力': '≥50N',
                '组件重量': '≤50KG',
                '节拍': '≤16S',
                '稼动率': '≥99.5%',
                '焊接良率': '≥99.5%(二次补焊后≥99.9%)',
                '视觉检测误判率': '<0.5%',
                '视觉检测漏判率': '<0.5%'
            }
        },
        'WV-KG02': {
            name: '接线盒扣盖机(WV-KG02)',
            images: ['./img/WV-KG02.jpg'],
            technicalPerformance: [
                '实现全自动扣接线盒盖',
                '采用真空检测与视觉检测等多种方式检测线盒盒盖效果',
                '振动盘上料可以兼容多种线盒盖子，盒盖存料量大',
                '机械手取放料，扣盖精度高',
                '支持斜插、平盖等多种盖盒盖方式',
                '版型切换方便'
            ],
            productParameters: {
                '电源': '单相220V,50HZ,三线制(1火1零1地)，进线规格3×2.5mm',
                '功率': '额定功率4KW',
                '设备占地': '4700(长)×2600(宽)×2600(高)mm',
                '组件尺寸范围': 'L:2550-1650mm,W:1450-990mm',
                '空气压力': '0.6-0.8 MPa',
                '耗气量': '峰值500L/min 平均300L/min',
                '组件、接线盒定位方式': '组件伺服驱动四点归正，接线盒CCD定位',
                '硅胶检测': '探胶位移检测',
                '版型切换时间': '10min',
                '重复定位精度': '0.05mm',
                '安装成功率': '≥99.8%',
                '噪音': '≤75分贝',
                '节拍': '≤13S',
                '组件重量': '≤50KG'
            }
        },
        'WV-TB03A': {
            name: '贴标机(WV-TB03A)',
            images: ['./img/WV-TB03A.jpg'],
            technicalPerformance: [
                '动力平台辅助撕标，提高出标完好率',
                '接标平台辅助条码出标，增加出标稳定性',
                '提前扫码+设备内补扫码功能，扫码成功率>99.9%',
                '由多个伺服运动轴为驱动轴，调试以及切换版型方便',
                'U轴采用步进旋转，精度高、调试方便、动作稳定',
                '视觉检测、三码校验等多个功能选配'
            ],
            productParameters: {
                '设备尺寸': '3800x2300x2000mm(可定制)',
                '适用组件尺寸': '长(1580-2500)x宽(800-1500)mm',
                '节拍': '≤15S',
                '设备稼动率': '≥99.5%',
                '贴标精度': '±1mm',
                '合格率': '≥99.8%',
                '设备电源、功率': '380V/220V 50/60Hz',
                '气源': '0.5-0.8MPa'
            }
        }

    };
    //桌面端和移动端产品目录导航生成
    const productLinksContainer = document.getElementById('product-container');
    const mobileMenu = document.getElementById('mobile-product-container');
    for (const productId in products) {
        const product = products[productId];
        //桌面端
        const link = document.createElement('a');
        link.href = '#products';
        link.dataset.product = productId;
        link.classList.add('nav-link', 'product-a', 'no-wrap');
        link.textContent = product.name;
        link.setAttribute('data-target', 'product-catalog');
        productLinksContainer.appendChild(link);



        //移动端
        const mobileLink = document.createElement('a');
        mobileLink.href = '#products';
        mobileLink.dataset.product = productId;
        mobileLink.classList.add('block', 'py-2', 'px-4', 'text-dark', 'hover:text-primary', 'product-a');
        mobileLink.textContent = product.name;
        mobileLink.setAttribute('data-target', 'product-catalog');
        mobileMenu.appendChild(mobileLink);
    }

    // 生成轮播图和指示器
    function generateSlider(images) {
        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('relative', 'z-10', 'rounded-2xl', 'overflow-hidden', 'shadow-2xl', 'slider-container');
        sliderContainer.id = 'slider-container';

        const sliderIndicators = document.createElement('div');
        sliderIndicators.classList.add('flex', 'justify-center', 'mt-2', 'slider-indicators');

        let currentIndex = 0;

        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Product Image ${index + 1}`;
            img.classList.add('slider-image');
            if (index === 0) {
                img.classList.add('active');
            }
            sliderContainer.appendChild(img);

            const indicator = document.createElement('div');
            indicator.classList.add('slider-indicator');
            if (index === 0) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
            sliderIndicators.appendChild(indicator);
        });

        function showSlide(index) {
            const slides = sliderContainer.querySelectorAll('.slider-image');
            const indicators = sliderIndicators.querySelectorAll('.slider-indicator');

            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });

            currentIndex = index;
        }

        setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            showSlide(nextIndex);
        }, 3000);

        return { sliderContainer, sliderIndicators };
    }

    // 生成产品内容
    function generateProductContent(product) {
        const productContent = document.createElement('div');
        productContent.classList.add('product-content');

        // 核心：图片+技术性能 左右分栏容器
        const mainWrapper = document.createElement('div');
        mainWrapper.classList.add('flex', 'flex-col', 'lg:flex-row', 'gap-12', 'items-center', 'mb-8');

        // 左侧：技术性能（lg占1/2）
        const techWrapper = document.createElement('div');
        techWrapper.classList.add('lg:w-1/2', 'order-2', 'lg:order-1','lg:w-1/2', 'order-1', 'lg:order-2','w-full', 'lg:min-w-[628px]', 'lg:min-h-[76px]'); // 移动端图片在上，技术性能在下；PC端反之

        const spaceYDiv = document.createElement('div');
        spaceYDiv.classList.add('space-y-6');

        // 技术性能
        if (product.technicalPerformance.length > 0) {
            const techDiv = document.createElement('div');
            const techTitle = document.createElement('h4');
            techTitle.classList.add('text-xl', 'font-semibold', 'text-dark', 'mb-3');
            techTitle.textContent = '技术性能';
            techDiv.appendChild(techTitle);

            const techList = document.createElement('ul');
            techList.classList.add('space-y-2');
            product.technicalPerformance.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('flex', 'items-start');
                const icon = document.createElement('i');
                icon.classList.add('fa', 'fa-check-circle', 'text-success', 'mt-1', 'mr-2');
                const text = document.createElement('span');
                text.textContent = item;
                listItem.appendChild(icon);
                listItem.appendChild(text);
                techList.appendChild(listItem);
            });
            techDiv.appendChild(techList);
            spaceYDiv.appendChild(techDiv);
        }

        techWrapper.appendChild(spaceYDiv);
        mainWrapper.appendChild(techWrapper);

        // 右侧：图片（lg占1/2）
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('lg:w-1/2', 'order-1', 'lg:order-2','w-full', 'lg:min-w-[628px]', 'lg:min-h-[76px]'); // 移动端优先显示图片，PC端放右侧

        if (product.images.length > 0) {
            const { sliderContainer, sliderIndicators } = generateSlider(product.images);
            const sliderWrapper = document.createElement('div');
            sliderWrapper.classList.add('w-full');
            sliderWrapper.appendChild(sliderContainer);
            sliderWrapper.appendChild(sliderIndicators);
            imageWrapper.appendChild(sliderWrapper);
        }

        mainWrapper.appendChild(imageWrapper);
        productContent.appendChild(mainWrapper);

        // 产品参数部分（单独一行）
        const paramWrapper = document.createElement('div');
        paramWrapper.classList.add('w-full');

        if (Object.keys(product.productParameters).length > 0) {
            const paramDiv = document.createElement('div');
            const paramTitle = document.createElement('h4');
            paramTitle.classList.add('text-xl', 'font-semibold', 'text-dark', 'mb-3');
            paramTitle.textContent = '产品参数';
            paramDiv.appendChild(paramTitle);

            const paramGrid = document.createElement('div');
            paramGrid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4');
            for (const [key, value] of Object.entries(product.productParameters)) {
                const paramItem = document.createElement('div');
                paramItem.classList.add('bg-white', 'p-4', 'rounded-lg', 'w-full', 'lg:min-w-[628px]', 'lg:min-h-[76px]');

                const paramKey = document.createElement('p');
                paramKey.classList.add('text-sm', 'text-gray-500');
                paramKey.textContent = key;
                const paramValue = document.createElement('p');
                paramValue.classList.add('font-semibold');
                paramValue.textContent = value;
                paramItem.appendChild(paramKey);
                paramItem.appendChild(paramValue);
                paramGrid.appendChild(paramItem);
            }
            paramDiv.appendChild(paramGrid);
            paramWrapper.appendChild(paramDiv);
        }

        productContent.appendChild(paramWrapper);

        return productContent;
    }

    //关于我们
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 移除所有激活状态
            tabBtns.forEach(b => b.classList.remove('active', 'border-primary', 'text-primary'));
            tabBtns.forEach(b => b.classList.add('text-gray-500'));
            tabContents.forEach(c => c.classList.add('hidden'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 添加当前激活状态
            this.classList.add('active', 'border-primary', 'text-primary');
            this.classList.remove('text-gray-500');
            const targetTab = this.dataset.tab;
            document.getElementById(`${targetTab}-content`).classList.remove('hidden');
            document.getElementById(`${targetTab}-content`).classList.add('active');
        });
    });

    // 移除原发展历程的展开按钮（不需要了）
    const toggleBtn = document.getElementById('toggle-timeline');
    if (toggleBtn) toggleBtn.remove();

   


    //移动端
    // 获取菜单按钮和导航菜单元素
    // 检查元素是否成功获取
    if (mobileMenuButton && mobileNav) {
        // 为按钮添加点击事件监听器
        mobileMenuButton.addEventListener('click', function () {
            // 切换导航菜单的显示状态

            if (mobileNav.style.display === 'none') {
                mobileNav.style.display = 'block';
            } else {
                mobileNav.style.display = 'none';
            }
        });
    } else {
        console.error('无法找到菜单按钮或导航菜单元素。');
    }

    const productDropdown = document.querySelector('.product-dropdown-mobile');
    const productLink = document.querySelector('#mobile-menu a[href="#"]');

    // 切换移动端菜单的显示与隐藏
    mobileMenuButton.addEventListener('click', function () {
        mobileNav.classList.toggle('hidden');
    });

    // 切换产品下拉菜单的显示与隐藏
    productLink.addEventListener('click', function (e) {
        e.preventDefault();
        productDropdown.classList.toggle('active');
    });


    //切换界面
    // 获取所有导航项
    const navItems = document.querySelectorAll('nav a');
    // 为每个导航项添加点击事件监听器
    navItems.forEach(item => {
        item.addEventListener('click', function () {

            // 获取目标内容区域的 ID
            const targetId = this.getAttribute('data-target');
            //生成指定产品内容
            if (targetId == "product-catalog") {
                const productId = this.dataset.product;
                const product = products[productId];
                // 清除之前的内容
                productContentContainer.innerHTML = '';
                // 生成新的产品内容
                const productContent = generateProductContent(product);
                productContentContainer.appendChild(productContent);
            }

            // 获取所有内容区域
            const contentAreas = document.querySelectorAll('.content');

            // 隐藏所有内容区域
            contentAreas.forEach(area => {
                area.classList.remove('active');
            });

            // 显示目标内容区域
            const targetArea = document.getElementById(targetId);
            targetArea.classList.add('active');

            //隐藏移动端菜单
            mobileNav.style.display = 'none';
        });
    });

    function firstProductClick(){
        const firstLink = document.querySelector("#product-container > a:nth-child(1)");
        firstLink.click();
    }
    

    //产品目录按钮
    const pBtn = document.getElementById("product-a")
    pBtn.addEventListener('click', function () {
        firstProductClick()
    });
    //了解产品按钮
    const productsBtn = document.getElementById("productsBtn")
    productsBtn.addEventListener('click', function () {
        firstProductClick()
    });
    //关于我们按钮
    const aboutBtn = document.getElementById("aboutBtn")
    aboutBtn.addEventListener('click', function () {
        const firstLink = document.getElementById("about-a");
        firstLink.click();
    });
    //了解更多产品细节按钮
    const mainProductBtn = document.getElementById("mainProductBtn")
    mainProductBtn.addEventListener('click', function () {
        firstProductClick()
    });


    //证书展示
    // 证书图片地址
    const certificateUrls = [
        './img/ryzz/1.png',
        './img/ryzz/2.png',
        './img/ryzz/3.png',
        './img/ryzz/4.png',
        './img/ryzz/5.png',
        './img/ryzz/6.png',
        './img/ryzz/7.png',
        './img/ryzz/8.png',
        './img/ryzz/9.png'
    ];

    // DOM元素
    const track = document.getElementById('certificateTrack');
    const indicatorContainer = document.getElementById('certificateIndicators');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // 配置
    const displayCount = 5; // 显示5个证书
    const totalCount = certificateUrls.length;
    let currentIndex = 2; // 默认中间项为选中态
    const itemClasses = ['far-prev', 'prev', 'active', 'next', 'far-next'];
    let autoPlayTimer;

    // 初始化轮播
    function initCarousel() {
        generateCarouselItems();
        generateIndicators();
        bindEvents();
        startAutoPlay();
    }

    // 生成轮播项
    function generateCarouselItems() {
        track.innerHTML = '';
        for (let i = 0; i < displayCount; i++) {
            const imgIndex = (currentIndex - 2 + i + totalCount) % totalCount;
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.dataset.index = imgIndex;

            const img = document.createElement('img');
            img.src = certificateUrls[imgIndex];
            img.alt = `证书 ${imgIndex + 1}`;

            item.appendChild(img);
            track.appendChild(item);
        }
        updateItemStyles();
    }

    // 生成指示器
    function generateIndicators() {
        indicatorContainer.innerHTML = '';
        for (let i = 0; i < totalCount; i++) {
            const indicator = document.createElement('span');
            indicator.className = `indicator ${i === currentIndex ? 'active' : ''}`;
            indicator.dataset.index = i;
            indicatorContainer.appendChild(indicator);
        }
    }

    // 更新样式
    function updateItemStyles() {
        const items = track.querySelectorAll('.carousel-item');
        const indicators = indicatorContainer.querySelectorAll('.indicator');

        items.forEach((item, idx) => {
            item.classList.remove(...itemClasses);
            item.classList.add(itemClasses[idx]);
        });

        indicators.forEach((ind, idx) => {
            ind.classList.toggle('active', idx === currentIndex);
        });
    }

    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCount) % totalCount;
        generateCarouselItems();
        resetAutoPlay();
    }

    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCount;
        generateCarouselItems();
        resetAutoPlay();
    }

    // 跳转到指定索引
    function goToSlide(targetIndex) {
        currentIndex = targetIndex;
        generateCarouselItems();
        resetAutoPlay();
    }

    // 绑定事件
    function bindEvents() {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        indicatorContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('indicator')) {
                const targetIndex = parseInt(e.target.dataset.index);
                goToSlide(targetIndex);
            }
        });

        track.addEventListener('click', (e) => {
            const item = e.target.closest('.carousel-item');
            if (item) {
                const targetIndex = parseInt(item.dataset.index);
                goToSlide(targetIndex);
            }
        });

        // 鼠标悬停暂停自动播放
        document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
            clearInterval(autoPlayTimer);
        });

        document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoPlay);
    }

    // 自动播放
    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 5000); // 5秒切换一次
    }

    // 重置自动播放
    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    // 初始化证书轮播
    if (document.getElementById('certificateTrack')) {
        initCarousel();
    }


});


