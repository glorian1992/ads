function showTab(tabName) {
            // Hide all tab contents
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));
            
            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }
        
        function calculateConversionROI() {
            const spend = parseFloat(document.getElementById('conv-spend').value) || 0;
            const revenue = parseFloat(document.getElementById('conv-revenue').value) || 0;
            const conversions = parseFloat(document.getElementById('conv-conversions').value) || 0;
            const clicks = parseFloat(document.getElementById('conv-clicks').value) || 0;
            
            const roi = spend > 0 ? ((revenue - spend) / spend * 100) : 0;
            const roas = spend > 0 ? (revenue / spend) : 0;
            const cpc = conversions > 0 ? (spend / conversions) : 0;
            const convRate = clicks > 0 ? (conversions / clicks * 100) : 0;
            
            document.getElementById('conv-roi').textContent = `${roi.toFixed(1)}%`;
            document.getElementById('conv-roas').textContent = `${roas.toFixed(2)}:1`;
            document.getElementById('conv-cpc').textContent = `€${cpc.toFixed(2)}`;
            document.getElementById('conv-rate').textContent = `${convRate.toFixed(1)}%`;
            
            // Color coding
            document.getElementById('conv-roi').className = `metric-value ${roi > 0 ? 'positive' : 'negative'}`;
        }
        
        function calculateTrafficROI() {
            const spend = parseFloat(document.getElementById('traffic-spend').value) || 0;
            const clicks = parseFloat(document.getElementById('traffic-clicks').value) || 0;
            const conversions = parseFloat(document.getElementById('traffic-conversions').value) || 0;
            const convValue = parseFloat(document.getElementById('traffic-value').value) || 0;
            
            const totalValue = conversions * convValue;
            const roi = spend > 0 ? ((totalValue - spend) / spend * 100) : 0;
            const cpc = clicks > 0 ? (spend / clicks) : 0;
            const cpa = conversions > 0 ? (spend / conversions) : 0;
            const convRate = clicks > 0 ? (conversions / clicks * 100) : 0;
            
            document.getElementById('traffic-roi').textContent = `${roi.toFixed(1)}%`;
            document.getElementById('traffic-cpc').textContent = `€${cpc.toFixed(2)}`;
            document.getElementById('traffic-cpa').textContent = `€${cpa.toFixed(2)}`;
            document.getElementById('traffic-rate').textContent = `${convRate.toFixed(1)}%`;
            
            document.getElementById('traffic-roi').className = `metric-value ${roi > 0 ? 'positive' : 'negative'}`;
        }
        
        function calculateReachROI() {
            const spend = parseFloat(document.getElementById('reach-spend').value) || 0;
            const reach = parseFloat(document.getElementById('reach-reach').value) || 0;
            const impressions = parseFloat(document.getElementById('reach-impressions').value) || 0;
            const ltv = parseFloat(document.getElementById('reach-ltv').value) || 0;
            
            const cpr = reach > 0 ? (spend / (reach / 1000)) : 0;
            const cpm = impressions > 0 ? (spend / (impressions / 1000)) : 0;
            const frequency = reach > 0 ? (impressions / reach) : 0;
            
            // Estimated ROI based on 1% conversion rate assumption
            const estimatedConversions = reach * 0.01;
            const estimatedRevenue = estimatedConversions * ltv;
            const potentialROI = spend > 0 ? ((estimatedRevenue - spend) / spend * 100) : 0;
            
            document.getElementById('reach-cpr').textContent = `€${cpr.toFixed(2)}`;
            document.getElementById('reach-cpm').textContent = `€${cpm.toFixed(2)}`;
            document.getElementById('reach-freq').textContent = frequency.toFixed(2);
            document.getElementById('reach-roi').textContent = `${potentialROI.toFixed(1)}%`;
            
            document.getElementById('reach-roi').className = `metric-value ${potentialROI > 0 ? 'positive' : 'negative'}`;
        }
        
        function calculateAwarenessROI() {
            const spend = parseFloat(document.getElementById('aware-spend').value) || 0;
            const impressions = parseFloat(document.getElementById('aware-impressions').value) || 0;
            const reach = parseFloat(document.getElementById('aware-reach').value) || 0;
            const engagement = parseFloat(document.getElementById('aware-engagement').value) || 0;
            
            const cpm = impressions > 0 ? (spend / (impressions / 1000)) : 0;
            const cpr = reach > 0 ? (spend / (reach / 1000)) : 0;
            const engagementRate = reach > 0 ? (engagement / reach * 100) : 0;
            const cpe = engagement > 0 ? (spend / engagement) : 0;
            
            document.getElementById('aware-cpm').textContent = `€${cpm.toFixed(2)}`;
            document.getElementById('aware-cpr').textContent = `€${cpr.toFixed(2)}`;
            document.getElementById('aware-er').textContent = `${engagementRate.toFixed(2)}%`;
            document.getElementById('aware-cpe').textContent = `€${cpe.toFixed(2)}`;
        }
        
        // Initialize with sample calculations
        window.onload = function() {
            // Set sample values
            document.getElementById('conv-spend').value = '1000';
            document.getElementById('conv-revenue').value = '3000';
            document.getElementById('conv-conversions').value = '50';
            document.getElementById('conv-clicks').value = '500';
            calculateConversionROI();
        };