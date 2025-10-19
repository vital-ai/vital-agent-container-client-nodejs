import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CloseIFrame
 */
export class CloseIFrame extends Card {
  public purgeSession?: boolean;
  public endpointURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CloseIFrame';
  }

  /**
   * Get property definitions for CloseIFrame
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPurgeSession',
        tsPropertyName: 'purgeSession',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndpointURI',
        tsPropertyName: 'endpointURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
