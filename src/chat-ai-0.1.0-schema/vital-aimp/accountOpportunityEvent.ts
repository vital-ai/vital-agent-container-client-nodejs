import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunityEvent
 */
export class AccountOpportunityEvent extends VITAL_Node {
  public accountOpportunityURI?: string;
  public accountOpportunityEventIdentifier?: string;
  public accountOpportunityEventTypeURI?: string;
  public accountOpportunityEventDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountOpportunityEvent';
  }

  /**
   * Get property definitions for AccountOpportunityEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityURI',
        tsPropertyName: 'accountOpportunityURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityEventIdentifier',
        tsPropertyName: 'accountOpportunityEventIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityEventTypeURI',
        tsPropertyName: 'accountOpportunityEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityEventDateTime',
        tsPropertyName: 'accountOpportunityEventDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
