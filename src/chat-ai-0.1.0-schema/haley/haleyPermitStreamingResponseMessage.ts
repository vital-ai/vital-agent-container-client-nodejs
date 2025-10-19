import { HaleyResponseMessage } from './haleyResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyPermitStreamingResponseMessage
 */
export class HaleyPermitStreamingResponseMessage extends HaleyResponseMessage {
  public permitStreamingTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyPermitStreamingResponseMessage';
  }

  /**
   * Get property definitions for HaleyPermitStreamingResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPermitStreamingTypeURI',
        tsPropertyName: 'permitStreamingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
