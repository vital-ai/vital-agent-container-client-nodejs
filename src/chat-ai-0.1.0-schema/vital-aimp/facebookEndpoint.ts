import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookEndpoint
 */
export class FacebookEndpoint extends Endpoint {
  public getStartedButtonEnabled?: boolean;
  public greetingText?: string;
  public persistedMenuJSON?: string;
  public gettingStartedText?: string;
  public entryText?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FacebookEndpoint';
  }

  /**
   * Get property definitions for FacebookEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGetStartedButtonEnabled',
        tsPropertyName: 'getStartedButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGreetingText',
        tsPropertyName: 'greetingText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPersistedMenuJSON',
        tsPropertyName: 'persistedMenuJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGettingStartedText',
        tsPropertyName: 'gettingStartedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntryText',
        tsPropertyName: 'entryText',
        type: 'string',
        required: false
      }
    ];
  }


}
