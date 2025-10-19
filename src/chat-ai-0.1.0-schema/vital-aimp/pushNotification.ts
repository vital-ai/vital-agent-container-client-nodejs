import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PushNotification
 */
export class PushNotification extends VITAL_Node {
  public sound?: string;
  public text?: string;
  public optionalData?: string;
  public badge?: number;
  public tokens?: string[];
  public expirationDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PushNotification';
  }

  /**
   * Get property definitions for PushNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSound',
        tsPropertyName: 'sound',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOptionalData',
        tsPropertyName: 'optionalData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBadge',
        tsPropertyName: 'badge',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTokens',
        tsPropertyName: 'tokens',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasExpirationDate',
        tsPropertyName: 'expirationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
