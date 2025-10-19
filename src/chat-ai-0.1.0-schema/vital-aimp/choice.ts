import { DialogPart } from './dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Choice
 */
export class Choice extends DialogPart {
  public exclusive?: boolean;
  public choiceLabel?: string;
  public choiceValue?: string;
  public imageURL?: string;
  public index?: number;
  public color?: string;
  public backgroundColor?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Choice';
  }

  /**
   * Get property definitions for Choice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isExclusive',
        tsPropertyName: 'exclusive',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChoiceLabel',
        tsPropertyName: 'choiceLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChoiceValue',
        tsPropertyName: 'choiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageURL',
        tsPropertyName: 'imageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasColor',
        tsPropertyName: 'color',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBackgroundColor',
        tsPropertyName: 'backgroundColor',
        type: 'string',
        required: false
      }
    ];
  }


}
