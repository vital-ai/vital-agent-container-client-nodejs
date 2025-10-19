import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Opportunity
 */
export class Opportunity extends AIMPThing {
  public shortDescription?: string;
  public entityURI?: string;
  public opportunityStatus?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Opportunity';
  }

  /**
   * Get property definitions for Opportunity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntityURI',
        tsPropertyName: 'entityURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOpportunityStatus',
        tsPropertyName: 'opportunityStatus',
        type: 'string',
        required: false
      }
    ];
  }


}
