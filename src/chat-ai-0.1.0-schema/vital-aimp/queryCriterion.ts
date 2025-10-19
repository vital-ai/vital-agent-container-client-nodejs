import { DialogPart } from './dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QueryCriterion
 */
export class QueryCriterion extends DialogPart {
  public criterionType?: string;
  public comparator?: string;
  public propertyValue?: string;
  public propertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#QueryCriterion';
  }

  /**
   * Get property definitions for QueryCriterion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCriterionType',
        tsPropertyName: 'criterionType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasComparator',
        tsPropertyName: 'comparator',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
