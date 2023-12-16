export enum IOSSelectorStrategies {
  IOSClassChain = '-ios class chain:',
  IOSPredicateString = '-ios predicate string:',
  Xpath = '',
  AccessibilityID = '~',
  ResourceID = 'id:',
}

export enum AndroidSelectorStrategies {
  AccessibilityID = '~',
  Xpath = '',
  UIAutomator2 = 'android=',
  ResourceID = 'id:',
}

export enum WebViewSelectorStrategies {
  CSS = 'css=',
  XPath = 'xpath=',
  ID = 'id=',
  LinkText = 'link text=',
  PartialLinkText = 'partial link text=',
  TagName = 'tag name=',
  ClassName = 'class name=',
  Name = 'name=',
}