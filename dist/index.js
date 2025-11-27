// 初始化 i18next
function i18Load() {
    return new Promise((resolve, reject) => {
        i18next
            .use(i18nextHttpBackend)
            .use(i18nextBrowserLanguageDetector)
            .init({
                fallbackLng: 'zh-CN',
                debug: false,
                interpolation: { escapeValue: false },
                backend: { loadPath: '/locales/{{lng}}/translation.json' },
                returnObjects: true 
            }, function (err, t) {
                
                if (err) reject(err);
                else {
                    console.log('i18next已就绪',i18next.language);
                    updateContent();
                    document.getElementById("lang-selector").value = i18next.language
                    resolve(t); // i18next就绪，resolve
                }
            });
    });
}


const products = {
    'WV-3500C': {
        id: 'WV-3500C',
        name: '无主栅电极互连一体机(WV-3500C)',
        images: ['./img/3500-1.jpg', './img/3500-2.jpg', './img/3500-3.jpg'],
        technicalPerformance: [
            '高性能：采用PC-Base控制系统，可重构I/O接口与定制化系统集成，智能化控制中枢构建高性能自动化平台',
            '高精密：亚微米级重复定位精度(±0.5μm)，高分辨率直线电机驱动单元，温度漂移实时补偿模块高精度伺服控制架构',
            '电池兼容：兼容182-210规格HJT/TOPcon/PERC/钙钛矿叠层'
        ],
        productParameters: {
            'capacity': '4500半片/小时 (单轨)',
            'slicingMethod': '激光无损切割(可选配)',
            'connectionMethod': '条膜/片膜覆膜',
            'solarCellSpec': '182-210mm电池片1/2片',
            'mainGridLineCount': '12-32BB (可定制)',
            'solarCellThickness': '90-180μm',
            'weldingRibbonSpec': 'φ0.16-φ0.32mm',
            'solarStringType': '正间距(0.5-5mm) 负间距(-0.5-2mm)',
            'equipmentDimensions': '长8150x宽1294x高2537(mm)',
            'adhesiveFilmSpec': '膜材质:改性带EVA/POE/TPO(或同等低流动性材质膜);同时可兼容带背胶的Pet; 卷外直径:450mm(可在线自动换料); 卷轴内径:76 mm; 膜条宽度:2.8-6mm; 正背面膜:正面和背面可使用不同膜',
            'fragmentationRate': '≤0.15% (电池片厚度120-140um)',
            'stringReworkRate': '≤1%',
            'oee': '≥85%',
            'flux': '无',
            'solderingTemp': '低温'
        }
    },
    'WV-TM100A': {
        id: 'WV-TM100A',
        name: '无主栅电极互连一体机(WV-TM100A)',
        images: ['./img/TM100A-1.jpg', './img/TM100A-2.jpg', './img/TM100A-3.jpg'],
        technicalPerformance: [
            '高速度：高度定制化系统集成、基于PC-Base控制系统，响应速度快',
            '智慧互连：智能数据分类、AI数据分析',
            '电池兼容：兼容182-210规格HJT/TOPcon/PERC/钙钛矿叠层',
            '集成多重工艺，检测、数据追踪系统、实现生产、检测、判断于一体，以保证生产制造过程中产品良率'
        ],
        productParameters: {
            'capacity': '7000四分片/小时(单轨) (兼容2分片)',
            'slicingMethod': '激光无损切割 (可选配)',
            'connectionMethod': '条膜/片膜覆膜',
            'solarCellSpec': '182-210mm',
            'mainGridLineCount': '12-32BB (可定制)',
            'solarCellThickness': '90-180μm',
            'weldingRibbonSpec': 'φ0.16-φ0.32mm',
            'solarStringType': '正间距(0.5-5mm) 负间距(-0.5-2mm)',
            'equipmentDimensions': '长10400×宽2100×高2500(mm)',
            'adhesiveFilmSpec': '膜材质:改性带EVA/POE/TPO(或同等低流动性材质膜);同时可兼容带背胶的Pet; 卷外直径:450mm(可在线自动换料); 卷轴内径:76 mm; 膜条宽度:2.8-6mm; 正背面膜:正面和背面可使用不同膜',
            'fragmentationRate': '≤0.15% (电池片厚度120-140um)',
            'stringReworkRate': '≤1%',
            'oee': '≥85%',
            'flux': '无',
            'solderingTemp': '低温'
        }
    },
    'WV-AZ400': {
        id: 'WV-AZ400',
        name: '接线盒安装一体机(WV-AZ400)',
        images: ['./img/WV-AZ400.jpg'],
        technicalPerformance: [
            '设备稳定性强,背板打胶独立PLC控制,流线传输独立控制,一键切换直通模式',
            '自主研发视觉控制系统,精准实现线盒定位并判定线盒安装效果',
            '多功能视觉检测,包含汇流条姿态,四氟布、胶带状态,胶路检测,线盒安装条件判定以及线盒安装、按压效果检测',
            '无序上料,可对接AGV、空中穿梭机,实现无人智能化'
        ],
        productParameters: {
            'cycleTime': '≤12S',
            'leadLiftingRate': '≥99.9%(去除来料不良)',
            'tapeTearingRate': '≥99.8%(去除来料不良)',
            'backplaneGluingRate': '≥99.9%',
            'boxInstallRate': '≥99.8%(去除来料不良)',
            'operationRate': '≥99.5%',
            'feedingMethod': '有序/无序,AGV对接',
            'moduleSizeRange': 'L:2500-1650mm,W:1450-990mm',
            'powerSupply': '380V/220V 50/60HZ',
            'moduleHeight': '950±50(mm)'
        }
    },
    'WV-AJ100': {
        id: 'WV-AJ100',
        name: '引线挑起背板打胶一体机(WV-AJ100)',
        images: ['./img/WV-AJ100.jpg'],
        technicalPerformance: [
            '自主研发视觉系统,精准检测来料状态、引导定位、成品检查',
            '兼具自动挑引线、捋直,高温布撕除、烫平、回收功能',
            '多处盒体引线采用同步操作,高节拍,高速度,高效率'
        ],
        productParameters: {
            'cycleTime': '≤12S',
            'leadLiftingRate': '≥99.9%(去除来料不良)',
            'tapeTearingRate': '≥99.8%(去除来料不良)',
            'backplaneGluingYield': '≥99.9%',
            'operationRate': '≥99.5%',
            'moduleSizeRange': 'L:2500-1650mm,W:1450-990mm'
        }
    },
    'WV-AZ500A': {
        id: 'WV-AZ500A',
        name: '背板打胶及线盒安装一体机(WV-AZ500A)',
        images: ['./img/WV-AZ500A.jpg'],
        technicalPerformance: [
            '具备汇流条检测、胶线检测、线盒检测功能,自动识别不良品与报警',
            '自研深度学习视觉系统,实现线盒精准定位及安装',
            '兼容有序/无序线盒上料方式,配合度高,节拍快,可对接AGV、空中穿梭机,实现无人智能化'
        ],
        productParameters: {
            'cycleTime': '≤12S',
            'backplaneGluingYield': '≥99.9%',
            'boxInstallRate': '≥99.8%(去除来料不良)',
            'operationRate': '≥99.5%',
            'feedingMethod': '有序/无序,AGV对接',
            'moduleSizeRange': 'L:2500-1650mm,W:1450-990mm'
        }
    },
    'WV-XH13A': {
        id: 'WV-XH13A',
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
            'floorArea': '3145mm×2200mm×2160mm',
            'moduleSize': '长(1600mm-2550mm)×宽(990-1450mm)',
            'cycleTime': '≤12S',
            'weldingYield': '≥99.9%(去除来料不良)',
            'operationRate': '≥99.5%',
            'overJudgmentRate': '≤0.5%',
            'weldingTensileForce': '≥100N',
            'ratedPower': '10kw',
            'alignmentAccuracy': '±0.5mm',
            'powerSupply': 'AC 380V±5%,50Hz',
            'airSupply': '0.5-0.8MPa'
        }
    },
    'WV-XH06A': {
        id: 'WV-XH06A',
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
            'equipmentDimensions': '3600×2000×2220(mm)可定制',
            'powerSupply': '三相五线 380V,50Hz, 峰值电流 40A',
            'power': '额定功率 24KW',
            'moduleSizeRange': 'L:2550-1500mm,W:1450-900mm',
            'cycleTime': '≤12S',
            'positioningMethod': '组件伺服驱动四点归正,接线盒CCD定位',
            'weldingHeadLife': '≥15W',
            'operationRate': '≥99.5%',
            'weldingTime': '≤3S/点',
            'spotPositioning': 'CCD',
            'versionSwitchTime': '20min',
            'weldingTempRange': '±15℃',
            'weldingPullOutForce': '≥50N'
        }
    },
    'WV-XH09A': {
        id: 'WV-XH09A',
        name: '接线盒热压焊接机(WV-XH09A)',
        images: ['./img/WV-XH09A.jpg'],
        technicalPerformance: [
            '采用高效焊接系统与动态视觉跟踪设计，提高机台稳定性',
            '控温精准：各焊接点位独立控制、各加热主体互不影响，保证控温准确性'
        ],
        productParameters: {
            'floorArea': '长3850x宽2100x高2150mm(不含三色灯)',
            'moduleSizeRange': 'L:2550-1500mm,W:1450-950mm',
            'powerSupply': '三相五线380V,50Hz,稳定电流60A',
            'power': '额定功率27KW',
            'spotPositioning': 'CCD',
            'positioningMethod': '组件伺服/气缸驱动四点归正，接线盒CCD定位',
            'weldingHeadLife': '≥3.5W',
            'versionSwitchTime': '20min',
            'weldingTempRange': '±5℃',
            'weldingPullOutForce': '≥50N',
            'moduleWeight': '≤50KG',
            'cycleTime': '≤16S',
            'operationRate': '≥99.5%',
            'weldingYield': '≥99.5%(二次补焊后≥99.9%)',
            'misjudgmentRate': '<0.5%',
            'missedJudgmentRate': '<0.5%'
        }
    },
    'WV-KG02': {
        id: 'WV-KG02',
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
            'powerSupply': '单相220V,50HZ,三线制(1火1零1地)，进线规格3×2.5mm',
            'power': '额定功率4KW',
            'floorArea': '4700(长)×2600(宽)×2600(高)mm',
            'moduleSizeRange': 'L:2550-1650mm,W:1450-990mm',
            'airPressure': '0.6-0.8 MPa',
            'airConsumption': '峰值500L/min 平均300L/min',
            'positioningMethod': '组件伺服驱动四点归正，接线盒CCD定位',
            'siliconeDetection': '探胶位移检测',
            'versionSwitchTime': '10min',
            'repeatAccuracy': '0.05mm',
            'installationRate': '≥99.8%',
            'noise': '≤75分贝',
            'cycleTime': '≤13S',
            'moduleWeight': '≤50KG'
        }
    },
    'WV-TB03A': {
        id: 'WV-TB03A',
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
            'equipmentDimensions': '3800x2300x2000mm(可定制)',
            'applicableModuleSize': '长(1580-2500)x宽(800-1500)mm',
            'cycleTime': '≤15S',
            'operationRate': '≥99.5%',
            'labelingAccuracy': '±1mm',
            'qualifiedRate': '≥99.8%',
            'powerSupply': '380V/220V 50/60Hz',
            'airSupply': '0.5-0.8MPa'
        }
    }
};


const mainProductDataArray = [
    {
        id: 'WV-3500C',
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

// 更新翻译内容
function updateContent() {
    //更新html
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = i18next.t(key, {
            name: 'i18next',
            lang: i18next.language
        });
        el.innerHTML = translation;
    });
    // 更新标题
    document.title = i18next.t('home.title');

}
// 语言切换
function changeLanguage(lng) {
    i18next.changeLanguage(lng, (err) => {
        if (!err) {
            updateContent();
        }
    });
    
}


document.addEventListener('DOMContentLoaded', async function () {

    // 产品目录
    const productContentContainer = document.getElementById('product-content-container');
     //移动端
    const mobileMenuButton = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-menu');

    await initDom()
    await i18Load()
    //选择语言
    const langSelect = document.getElementById('lang-selector');
    langSelect.addEventListener('change', function () {
         changeLanguage(this.value)
    });
    // 解析URL哈希，初始化对应内容
    const hash = window.location.hash.slice(1);
    if (hash) {
        const [targetId, productId] = hash.split('-');
        if (targetId) {
            // 模拟点击对应导航，触发内容切换+历史记录
            const navItem = productId
                ? document.querySelector(`nav a[data-target="${targetId}"][data-product="${productId}"]`)
                : document.querySelector(`nav a[data-target="${targetId}"]`);

            if (navItem) navItem.click();
        }
    } else {
        // 默认显示首页
        document.getElementById('index').classList.add('active');
    }
  
    
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
                        <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full"
                            data-i18n="mainProduct.badge"
                        >
                            ${mainProductData.badgeText}
                        </div>
                    ` : ''}
                </div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                <div class="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
        `;

        // 产品描述部分（变量名移除 product 字样）
        const featureListHTML = mainProductData.features.map((feature,index) => `
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fa fa-check text-primary"></i>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-dark mb-1" data-i18n="mainProduct.feature${index}.title">${feature.title}</h4>
                    <p class="text-gray-600" data-i18n="mainProduct.feature${index}.desc">${feature.content}</p>
                </div>
            </div>
        `).join('');

        const descHTML = `
            <div class="lg:w-1/2">
                <h3 class="text-2xl md:text-3xl font-bold text-dark mb-6" data-i18n="mainProduct.desc">${mainProductData.title}</h3>
                <p class="text-gray-700 mb-6 text-lg" data-i18n="mainProduct.desc">${mainProductData.description}</p>
                
                <div class="space-y-4 mb-8">
                    ${featureListHTML}
                </div>
                
                <a href="#products" id="mainProductBtn" class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-custom" 
                data-i18n="mainProduct.btn" >
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
  
    //初始化dom元素
    function initDom() {
        // 插入到主产品展示 Container 中
        const mainProductSContainer = document.getElementById('main-product-container');
        if (mainProductSContainer) {
            mainProductSContainer.innerHTML = generateMainProduct();
        }
        //产品下拉框
        generateProductSelect()
        //导航栏产品目录
        generateProductLinks()
    }

    
    // 清空容器产品内容
    function removeProductContent() {
        const firstProductContent = productContentContainer.querySelector('.product-content');
        if (firstProductContent) {
            firstProductContent.remove();
        }
    }

     //生成产品下拉框内容
    function generateProductSelect() {

        const selectWrapper = document.createElement('div');
        selectWrapper.classList.add('w-full', 'mb-6', 'flex', 'justify-center', 'px-0', 'lg:px-0');
        const productSelect = document.createElement('select');
        productSelect.classList.add(
            'px-4', 'py-2', 'border', 'border-gray-200', 'rounded-lg',
            'bg-white', 'shadow-sm', 'focus:outline-none',
            'focus:ring-2', 'focus:ring-primary/50', 'min-w-[200px]'
        );
        productSelect.setAttribute('id', 'productSwitcher');
        // 填充下拉选项
        for (const productId in products) {
            const product = products[productId];
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;

            option.setAttribute('data-i18n', `productInfo.${product.id}.name`);
            productSelect.appendChild(option);
        }        
        //监听下拉框选择
        productSelect.addEventListener('change', function () {
            const selectedProduct = products[this.value];
            //清空
            removeProductContent();
            productContentContainer.appendChild(generateProductContent(selectedProduct));
            updateContent()
            // 同步更新哈希（复用原有逻辑）
            handleNavClick(new Event('click'), 'product-catalog', selectedProduct.name, this.value);
        });

        selectWrapper.appendChild(productSelect);
        productContentContainer.appendChild(selectWrapper);
    }

  
  
    
    //桌面端和移动端产品目录导航生成
    function generateProductLinks() {
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
            link.setAttribute('data-i18n', `productInfo.${product.id}.name`);
            productLinksContainer.appendChild(link);



            //移动端
            const mobileLink = document.createElement('a');
            mobileLink.href = '#products';
            mobileLink.dataset.product = productId;
            mobileLink.classList.add('block', 'py-2', 'px-4', 'text-dark', 'hover:text-primary', 'product-a');
            mobileLink.textContent = product.name;
            mobileLink.setAttribute('data-target', 'product-catalog');
            mobileLink.setAttribute('data-i18n', `productInfo.${product.id}.name`);

            mobileMenu.appendChild(mobileLink);
        }
    }
    

    // 生成轮播图和指示器
    function generateSlider(images,productName,id) {
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
        // 产品名标签（左上角）
        const productNameLabel = document.createElement('div');
        productNameLabel.classList.add('absolute','top-4','left-4','bg-primary','text-white','text-sm','font-medium','px-3','py-1','rounded-full');
        productNameLabel.textContent = productName;
        productNameLabel.setAttribute('data-i18n', `productInfo.${id}.name`);
        sliderContainer.appendChild(productNameLabel);

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

        //设置下拉框值
        document.getElementById("productSwitcher").value = product.id

        // 核心：图片+技术性能 左右分栏容器
        const mainWrapper = document.createElement('div');
        mainWrapper.classList.add('flex', 'flex-col', 'lg:flex-row', 'gap-12', 'items-center', 'mb-8');

        // 左侧：技术性能（lg占1/2）
        const techWrapper = document.createElement('div');
        techWrapper.classList.add('lg:w-1/2', 'order-2', 'lg:order-1','lg:w-1/2', 'order-1', 'lg:order-2','w-full', 'lg:min-w-[628px]'); // 移动端图片在上，技术性能在下；PC端反之

        const spaceYDiv = document.createElement('div');
        spaceYDiv.classList.add('space-y-6');

        // 技术性能
        if (product.technicalPerformance.length > 0) {
            const techDiv = document.createElement('div');
            const techTitle = document.createElement('h4');
            techTitle.classList.add('text-xl', 'font-semibold', 'text-dark', 'mb-3');

            techTitle.textContent = '技术性能';
            techTitle.setAttribute('data-i18n', `product.technicalPerformance`);

            techDiv.appendChild(techTitle);

            const techList = document.createElement('ul');
            techList.classList.add('space-y-2');
            product.technicalPerformance.forEach((item,index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('flex', 'items-start');
                const icon = document.createElement('i');
                icon.classList.add('fa', 'fa-check-circle', 'text-success', 'mt-1', 'mr-2');
                const text = document.createElement('span');
                text.textContent = item;
                text.setAttribute('data-i18n', `productInfo.${product.id}.technicalPerformance.${index}`);
                
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
        imageWrapper.classList.add('lg:w-1/2', 'order-1', 'lg:order-2','w-full', 'lg:min-w-[628px]', 'lg:min-h-[492px]'); // 移动端优先显示图片，PC端放右侧



        if (product.images.length > 0) {
            const { sliderContainer, sliderIndicators } = generateSlider(product.images,product.name,product.id);
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
            paramTitle.setAttribute('data-i18n', `product.parameters`);
            paramDiv.appendChild(paramTitle);

            const paramGrid = document.createElement('div');
            paramGrid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4');
            for (const [key, value] of Object.entries(product.productParameters)) {
                
                const paramItem = document.createElement('div');
                paramItem.classList.add('bg-white', 'p-4', 'rounded-lg', 'w-full', 'lg:min-w-[628px]', 'lg:min-h-[76px]');

                const paramKey = document.createElement('p');
                paramKey.classList.add('text-sm', 'text-gray-500');
                paramKey.textContent = key;
                paramKey.setAttribute('data-i18n', `productInfo.${product.id}.productParameters.key.${key}`);

                const paramValue = document.createElement('p');
                paramValue.classList.add('font-semibold');
                paramValue.setAttribute('data-i18n', `productInfo.${product.id}.productParameters.value.${key}`);
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
                removeProductContent();

                // 生成新的产品内容
                const productContent = generateProductContent(product);
                productContentContainer.appendChild(productContent);
                updateContent()
            }

            //隐藏移动端菜单
            mobileNav.style.display = 'none';
        });
    });



    function firstProductClick(){
        const firstLink = document.querySelector("#product-container > a:nth-child(1)")
        firstLink.click();
    }
    

    //产品目录按钮
    const pBtn = document.getElementById("product-a")
    pBtn.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止锚点跳转（关键！）
        firstProductClick()
    });
    //了解产品按钮
    const productsBtn = document.getElementById("productsBtn")
    productsBtn.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止锚点跳转（关键！）
        firstProductClick()
    });
    //关于我们按钮
    const aboutBtn = document.getElementById("aboutBtn")
    aboutBtn.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止锚点跳转（关键！）
        const firstLink = document.getElementById("about-a");
        firstLink.click();
    });
    //了解更多产品细节按钮
    const mainProductBtn = document.getElementById("mainProductBtn")
    mainProductBtn.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止锚点跳转（关键！）
        firstProductClick()
    });


    //证书展示
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

    // ① 初始化哈希匹配（核心：直接访问带哈希的链接时触发）
    initHashMatch();

    // ② 绑定导航点击事件（复用原有逻辑）
    // 普通导航（首页/关于我们/联系我们）
    document.querySelectorAll('nav a[data-target]:not([data-product])').forEach(item => {
        item.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            const navText = this.textContent.trim();
            handleNavClick(e, targetId, navText);
        });
    });

    // 产品目录导航
    document.querySelectorAll('nav a[data-product]').forEach(item => {
        item.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            const productId = this.dataset.product;
            const navText = this.textContent.trim();
            handleNavClick(e, targetId, navText, productId);
        });
    });

    // ③ 监听浏览器返回/前进事件
    window.addEventListener('popstate', function (e) {
        if (!e.state) {
            // 无状态：返回首页
            document.querySelectorAll('.content').forEach(area => area.classList.remove('active'));
            document.getElementById('index').classList.add('active');
            return;
        }

        // 恢复历史状态
        const { target, product } = e.state;
        document.querySelectorAll('.content').forEach(area => area.classList.remove('active'));
        const targetArea = document.getElementById(target);
        if (targetArea) targetArea.classList.add('active');

        // 恢复产品目录
        if (target === 'product-catalog' && product && productContentContainer) {
            const productData = products[product];
            removeProductContent();
            productContentContainer.appendChild(generateProductContent(productData));
            updateContent()
        }
    });


    // 统一导航处理函数（所有导航共用）
    function handleNavClick(e, targetId, navText, productId = null) {
        
        e.preventDefault(); // 阻止默认锚点跳转

        // 新增：滚动到对应section（核心修复）
        scrollToTargetSection(targetId);

        // 1. 添加历史记录
        const stateData = { target: targetId, product: productId };
        let hashUrl = `#targetId=${targetId}`;
        if (productId) {
            hashUrl += `&productId=${productId}`; // 产品ID带-也不影响
        }
        history.pushState(stateData, navText, window.location.pathname + hashUrl);

        // 2. 切换内容区域
        document.querySelectorAll('.content').forEach(area => area.classList.remove('active'));
        const targetArea = document.getElementById(targetId);
        if (targetArea) targetArea.classList.add('active');

        // 3. 产品目录专属：加载对应产品内容
        if (targetId === 'product-catalog' && productId) {
            const product = products[productId];
            if (product && productContentContainer) {
                removeProductContent();
                productContentContainer.appendChild(generateProductContent(product));
                updateContent()
            }
        }

        // 4. 隐藏移动端菜单
        const mobileNav = document.getElementById('mobile-menu');
        if (mobileNav) mobileNav.style.display = 'none';
    }
    // 新增：滚动到目标section的工具函数
    function scrollToTargetSection(targetId) {
        // 定义 targetId 与页面section id的映射关系
        const sectionMap = {
            'index': 'index', // 首页根容器
            'about-us': 'about', // 关于我们section
            'product-catalog': 'products', // 产品目录section
            'index-contact': 'index-contact' // 联系我们section
        };

        // 获取要滚动到的section元素
        const sectionId = sectionMap[targetId];
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;

        // 平滑滚动到目标位置（兼容导航栏高度）
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: targetTop,
            behavior: 'auto' 
        });
    }

    // 哈希解析+初始化函数
    function initHashMatch() {
        const hash = window.location.hash.slice(1); // 去掉#，得到 "targetId=product-catalog&productId=WV-AZ500A"
        if (!hash) {
            document.getElementById('index').classList.add('active');
            return;
        }

        // 👇 按URL参数解析（兼容产品ID带-）
        const hashParams = new URLSearchParams(hash);
        const targetId = hashParams.get('targetId') || '';
        const productId = hashParams.get('productId') || '';

        // 验证目标区域
        const targetArea = document.getElementById(targetId);
        if (!targetArea) {
            document.querySelectorAll('.content').forEach(area => area.classList.remove('active'));
            document.getElementById('index').classList.add('active');
            return;
        }

        // 激活目标区域 + 加载产品
        document.querySelectorAll('.content').forEach(area => area.classList.remove('active'));
        targetArea.classList.add('active');

        if (targetId === 'product-catalog' && productId) {
            const loadProduct = () => {
                const product = products[productId];
                if (product && productContentContainer) {
                    removeProductContent();
                    productContentContainer.appendChild(generateProductContent(product));
                    updateContent()
                } else if (productContentContainer) {
                    firstProductClick();
                } else if (loadProduct.retryCount < 5) {
                    loadProduct.retryCount++;
                    setTimeout(loadProduct, 100);
                }
            };
            loadProduct.retryCount = 0;
            loadProduct();
        }

        // 同步历史记录
        history.replaceState(
            { target: targetId, product: productId },
            document.title,
            window.location.href
        );
    }


});





