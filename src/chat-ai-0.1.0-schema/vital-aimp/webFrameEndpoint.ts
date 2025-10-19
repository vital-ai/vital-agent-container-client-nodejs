import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#WebFrameEndpoint
 */
export class WebFrameEndpoint extends Endpoint {
  public customerServiceEnabled?: boolean;
  public color?: string;
  public greetingText?: string;
  public openInitially?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#WebFrameEndpoint';
  }

  /**
   * Get property definitions for WebFrameEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCustomerServiceEnabled',
        tsPropertyName: 'customerServiceEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasColor',
        tsPropertyName: 'color',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGreetingText',
        tsPropertyName: 'greetingText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isOpenInitially',
        tsPropertyName: 'openInitially',
        type: 'boolean',
        required: false
      }
    ];
  }


}
