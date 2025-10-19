import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountEvent
 */
export class AccountEvent extends VITAL_Node {
  public accountEventTypeURI?: string;
  public accountEventAccountURI?: string;
  public accountEventIdentifier?: string;
  public accountURI?: string;
  public accountEventLoginURI?: string;
  public accountEventDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountEvent';
  }

  /**
   * Get property definitions for AccountEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventTypeURI',
        tsPropertyName: 'accountEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventAccountURI',
        tsPropertyName: 'accountEventAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventIdentifier',
        tsPropertyName: 'accountEventIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventLoginURI',
        tsPropertyName: 'accountEventLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventDateTime',
        tsPropertyName: 'accountEventDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
