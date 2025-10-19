import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PermittedSender
 */
export class PermittedSender extends VITAL_Node {
  public email?: string;
  public permittedSenderTypeURI?: string;
  public permittedSenderStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PermittedSender';
  }

  /**
   * Get property definitions for PermittedSender
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEmail',
        tsPropertyName: 'email',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPermittedSenderTypeURI',
        tsPropertyName: 'permittedSenderTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPermittedSenderStatusURI',
        tsPropertyName: 'permittedSenderStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
