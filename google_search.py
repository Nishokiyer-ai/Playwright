from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto("https://www.google.com")

    # Accept cookies if prompted
    try:
        page.click('button:has-text("Accept all")', timeout=5000)
    except:
        pass

    # Type the query and submit
    page.fill('input[name="q"]', 'i am good')
    page.keyboard.press('Enter')

    # Wait for 30 seconds
    page.wait_for_timeout(30000)

    browser.close()
