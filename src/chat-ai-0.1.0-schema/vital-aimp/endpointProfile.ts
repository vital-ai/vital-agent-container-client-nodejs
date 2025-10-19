import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EndpointProfile
 */
export class EndpointProfile extends VITAL_Node {
  public locale?: string;
  public premium?: boolean;
  public authLoginProfile?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EndpointProfile';
  }

  /**
   * Get property definitions for EndpointProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocale',
        tsPropertyName: 'locale',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPremium',
        tsPropertyName: 'premium',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAuthLoginProfile',
        tsPropertyName: 'authLoginProfile',
        type: 'boolean',
        required: false
      }
    ];
  }


}
